"""main.py
Python FastAPI Auth0 integration example
"""
import uvicorn 
from fastapi import FastAPI
from fastapi import FastAPI, Request, Response, status
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.encoders import jsonable_encoder
from fastapi import Depends, FastAPI  
from fastapi.security import HTTPBearer  
token_auth_scheme = HTTPBearer() 
from utils import VerifyToken
from fastapi.middleware.cors import CORSMiddleware

origins = ["*"]


# Creates app instance

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/public")
async def public():
    """No access token required to access this route"""

    result = {
        "status": "success",
        "msg": ("Hello from a public endpoint! You don't need to be "
                "authenticated to see this.")
    }
    json_compatible = jsonable_encoder(result)

    return JSONResponse(content=json_compatible)

@app.get("/api/private")
async def private(response: Response, token: str = Depends(token_auth_scheme)):  # 👈 updated code
    """A valid access token is required to access this route"""
 
    result = VerifyToken(token.credentials).verify() 

    if result.get("status"):
       response.status_code = status.HTTP_400_BAD_REQUEST
       return result
 
    return result
 
@app.api_route("/{path_name:path}", methods=["GET"])
async def catch_all(request: Request, path_name: str):
    return {"request_method": request.method, "path_name": path_name} 

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)