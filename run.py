#!/usr/bin/env python
# -*-coding: utf-8-*-
from tornado.web import Application, StaticFileHandler
from tornado.options import define, options
from tornado.ioloop import IOLoop
import os

define('port', default=80, help='server run on the given port!', type=int)

app_root = os.path.dirname(__file__)


class App(Application):
    def __init__(self):
        handlers = [
            (r'/(.*)', StaticFileHandler, {'path': app_root, 'default_filename': 'index.html'})
        ]
        settings = dict(
            cookie_secret='MY5qf2/oSCeLqtlelHFEEVTeII1mZE/KobHmruHkcVw=',
            debug=True
        )
        Application.__init__(self, handlers, **settings)


def main():
    options.parse_command_line()
    app = App()
    app.listen(options.port)
    IOLoop.current().start()

if __name__ == '__main__':
    main()
