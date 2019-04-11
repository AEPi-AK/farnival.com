#!/bin/bash

FLASK_DEBUG=1 FLASK_APP=backend flask run --host=0.0.0.0 &
ng serve --host=0.0.0.0