using System;
using System.Collections.Generic;
using System.Text;
using Terrasoft.Core;

namespace PackageTwo.Interfaces
{
    public interface IConfToClio
    {
        void PostMessageToAll(string sender, string message);

        void PostMessage(UserConnection userConnection, string sender, string message);
    }
}
