FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /BlogProject
WORKDIR /BlogProject
COPY requirements.txt /BlogProject/
RUN pip install -r requirements.txt
COPY . /BlogProject/

EXPOSE 5001