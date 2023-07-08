import requests
def main():
    response = requests.get("http://127.0.0.1:4000/user/register/")
    print(response.status_code)
    print(response.content)


if __name__ == "__main__":
    main()