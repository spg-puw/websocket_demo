#!/usr/bin/env python

#in your env: pip install websockets
PORT = 8001

import asyncio
from websockets import serve

async def echo(websocket):
    async for message in websocket:
        await websocket.send(f'Hello {message}')
        await websocket.send('This is another websocket message from the server!')
        print('[echo] message got', message)

async def main():
    async with serve(echo, 'localhost', PORT):
        await asyncio.Future()  #run forever

asyncio.run(main())
