using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalRComProxyCriadomanualmente
{
    public class MyServer : Hub
    {
        public void AlertAll(string msg)
        {
            Clients.All.clientAlertAll(msg);
        }
    }
}