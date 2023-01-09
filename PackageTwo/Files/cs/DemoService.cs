using PackageTwo.Files.cs;
using PackageTwo.Interfaces;
using System;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Core;
using Terrasoft.Core.Factories;
using Terrasoft.Web.Common;

namespace PackageTwo
{
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class CreatioWsTemplate : BaseService
    {
        #region Properties
        private SystemUserConnection _systemUserConnection;
        private SystemUserConnection SystemUserConnection
        {
            get
            {
                return _systemUserConnection ?? (_systemUserConnection = (SystemUserConnection)AppConnection.SystemUserConnection);
            }
        }
        #endregion

        // http://<hostname>:<port>/0/rest/className/MethodName
        // http://lqmfu-laptec-01:7010/0/rest/CreatioWsTemplate/PostMethodName
        #region Methods : REST
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
        public string PostMethodName(Guid bankLineId)
        {
            UserConnection userConnection = UserConnection ?? SystemUserConnection;
            return "Ok";
        }

        // http://lqmfu-laptec-01:7010/0/rest/CreatioWsTemplate/GetMethodName
        // http://lqmfu-laptec-01:7010/0/rest/CreatioWsTemplate/GetMethodName?a=1&b=10
        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
        public string GetMethodname(int a, int b)
        {
            UserConnection userConnection = UserConnection ?? SystemUserConnection;
            var c = new Calculator(UserConnection);
            var conf = ClassFactory.Get<IConfToClio>();
            conf.PostMessageToAll("Web service", "Message here !!!");
            
            return $"Ok {c.Add(a, b)}";
        }

        #endregion

        #region Methods : Private

        #endregion
    }
}



