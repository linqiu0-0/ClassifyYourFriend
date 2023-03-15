# Install the base requirements for the app.
FROM python:3.8
RUN python -m pip install --upgrade pip
RUN pip install Flask gunicorn
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY src/ /app
WORKDIR /app
ENV PORT 8080
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 server:app

