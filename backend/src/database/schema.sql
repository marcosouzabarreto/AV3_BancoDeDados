CREATE DATABASE av3bancodedados;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS function (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS class (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  schedule VARCHAR
);

CREATE TABLE IF NOT EXISTS course (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  class_id UUID,
  FOREIGN KEY(class_id) REFERENCES class(id)
);

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE, 
  password VARCHAR,
  function_id UUID,
  course_id UUID,
  FOREIGN KEY(function_id) REFERENCES function(id),
  FOREIGN KEY(course_id) REFERENCES course(id)
);