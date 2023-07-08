import requests

def register_user():
    user_object = {"username": "Steve1",
                   "password": "SuperPass2325!",
                   "passcheck": "SuperPass2325!"}
    response = requests.post("http://127.0.0.1:4000/user/register/", data=user_object)
    print(response.status_code)
    print(response.content)

def login_user():
    user_object = {"username" : "Pixler",
                   "password" : "abc123" }
    response = requests.post("http://127.0.0.1:4000/user/login/", data=user_object)
    print(response.status_code)
    print(response.content)


def main():
    login_user()


if __name__ == "__main__":
    main()