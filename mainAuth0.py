"""main.py
Python FastAPI Auth0 integration example
"""
import uvicorn 
from fastapi import FastAPI
from fastapi import FastAPI, Request, Response, status
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.encoders import jsonable_encoder
from fastapi import Depends, FastAPI  # 👈 new imports
from fastapi.security import HTTPBearer  # 👈 new imports
token_auth_scheme = HTTPBearer()  # 👈 new code
from utils import VerifyToken


# Creates app instance
app = FastAPI()
appVue = FastAPI()
appVue.mount("/", StaticFiles(directory="./dist",html=True), name="static")
 
@appVue.get("/")
async def home():
    return FileResponse("index.html") 

@app.get("/api/public")
def public():
    """No access token required to access this route"""

    result = {
        "status": "success",
        "msg": ("Hello from a public endpoint! You don't need to be "
                "authenticated to see this.")
    }
    json_compatible = jsonable_encoder(result)

    return JSONResponse(content=json_compatible)

@app.get("/api/private")
def private(response: Response, token: str = Depends(token_auth_scheme)):  # 👈 updated code
    """A valid access token is required to access this route"""
 
    result = VerifyToken(token.credentials).verify()  # 👈 updated code

    # 👇 new code
    if result.get("status"):
       response.status_code = status.HTTP_400_BAD_REQUEST
       return result
    # 👆 new code
 
    return result


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)