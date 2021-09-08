using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace SignalRComProxyCriadomanualmente
{
    public class Board : Hub
    {
        private const int BoardWidth = 250;
        private const int BoardHeight = 250;
        private static int[,] _buffer = GetEmpyBuffer();

        public Task BroadCastPoint(int x, int y)
        {
            x = x < 0 ? 0 : x;
            x = x > BoardWidth ? x = BoardWidth - 1 : x;

            y = y < 0 ? 0 : y;
            y = y > BoardHeight ? y = BoardHeight - 1 : y;

            int color = 0;
            int.TryParse(Clients.Caller.color, out color);
            _buffer[x, y] = color;
            return Clients.Others.DrawPoint(x, y, Clients.Caller.color);
        }

        public Task BroadCastClear()
        {
            _buffer = GetEmpyBuffer();
            return Clients.Others.Clear();
        }

        private static int[,] GetEmpyBuffer()
        {
            var buffer = new int[BoardWidth, BoardHeight];
            return buffer;
        }

        public override Task OnConnected()
        {
            Clients.Caller.Update(_buffer);
            return base.OnConnected();
        }

    }
}