
using PackageTwo.Interfaces;
using Terrasoft.Configuration;
using Terrasoft.Core;
using Terrasoft.Core.Factories;

namespace PackageTwo.Conf
{
    [DefaultBinding(typeof(IConfToClio))]
    public class Conf : IConfToClio
    {
        public void PostMessage(UserConnection userConnection, string sender, string message)
        {
            MsgChannelUtilities.PostMessage(userConnection, sender, message);
        }

        public void PostMessageToAll(string sender, string message)
        {
            MsgChannelUtilities.PostMessageToAll(sender, message);
        }
    }
}