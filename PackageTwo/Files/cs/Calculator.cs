using PackageTwo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Factories;

namespace PackageTwo.Files.cs
{
    [DefaultBinding(typeof(ICalculator))]
    public class Calculator : ICalculator
    {
        private readonly UserConnection _userConnection;

        public Calculator(UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

        public int Add(int a, int b)
        {
            return a + b + 100;
        }

        public int Sub(int a, int b)
        {
            return a - b;
        }

        public string FindContactByEmail(string email)
        {
            Select select = new Select(_userConnection)
                .Column("Name")
                .From("Contact")
                .Where("Email").IsEqual(Column.Parameter(email)) as Select;
            return select.ExecuteScalar<string>();
        }
    }

}
