using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalRComProxyCriadomanualmente
{
    public class Board : Hub
    {
        private const int BoardWidth = 250;
        private const int BoardHeight = 250;
        private static int[,] _buffer = GetEmpyBuffer();
    }
}