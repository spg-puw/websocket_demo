#!/usr/bin/env python

#in your env: pip install websockets
PORT = 8001

import asyncio
from websockets import connect

async def helloworld(uri):
    async with connect(uri) as websocket:
        await websocket.send('world')
        await websocket.recv()
        print('Done')

asyncio.run(helloworld(f'ws://localhost:{PORT}'))
