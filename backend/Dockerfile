
FROM ubuntu:18.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update

RUN apt-get install -y \
    build-essential libssl-dev zlib1g-dev libbz2-dev \
    libreadline-dev libsqlite3-dev wget curl llvm \
    libncurses5-dev libncursesw5-dev xz-utils tk-dev \
    libffi-dev liblzma-dev python-openssl git
RUN apt-get install -y gcc
RUN apt-get install -y ffmpeg

ENV LANG="C.UTF-8" \
    LC_ALL="C.UTF-8" \
    PATH="/root/.pyenv/shims:/root/.pyenv/bin:$PATH" \
    PYENV_ROOT="/root/.pyenv" \
    PYENV_SHELL="bash"

ENV PYTHON_VERSION=3.8.5

RUN git clone https://github.com/pyenv/pyenv.git $PYENV_ROOT \
    && pyenv install $PYTHON_VERSION \
    && pyenv global $PYTHON_VERSION

ENV PYTHONIOENCODING=utf-8
ENV PYTHONBUFFERED=0

COPY ./src/requirements.txt /app/

WORKDIR /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ./src /app
RUN python manage.py migrate; exit 0

EXPOSE 8000
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "main.wsgi:application"]