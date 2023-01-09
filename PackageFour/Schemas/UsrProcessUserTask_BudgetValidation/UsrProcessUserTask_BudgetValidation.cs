namespace Terrasoft.Core.Process.Configuration
{

	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;
	using PackageTwo.Interfaces;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.UI.WebControls.Controls;

	#region Class: UsrProcessUserTask_BudgetValidation

	/// <exclude/>
	public partial class UsrProcessUserTask_BudgetValidation
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			//ICalculator calc = ClassFactory.Get<ICalculator>();
			//calc.Add(11,2);
			//var externalApiCall = DoSomeHevyListing();
			var schema = UserConnection.EntitySchemaManager.GetInstanceByName("UsrDemoSection");
			var entity = schema.CreateEntity(UserConnection);
			entity.FetchFromDB(RecordId);
			string name = entity.GetTypedColumnValue<string>("UsrName");

            if (name.Length > 5)
			{
				Result = true;
			}
			else
			{
                Result = false;
            }

			/*
			if (context == null)
			{

			}
			else 
			{
				
			}
			Result = true;*/
			//always return true
			return true;
		}

		#endregion

		#region Methods: Public

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion

	}

	#endregion

}

