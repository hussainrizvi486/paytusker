import os
import subprocess


# def run_develope

react_app = subprocess.Popen("npm run dev", shell=True, cwd="./frontend")
django_server = subprocess.Popen("py manage.py runserver", shell=True, cwd="./backend")


def install_node_modules(dirs):
    # if not "node_modules" in dirs:
    subprocess.Popen(
        "npm i",
        shell=True,
    )   


def validate_packages():
    os.chdir("./frontend")
    dirs = os.listdir()
    install_node_modules(dirs)
    # if not "node_modules" in dirs:
    # ...


# validate_packages()
react_app.wait()
django_server.wait()
