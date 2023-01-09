namespace PackageTwo.Interfaces
{
    public interface ICalculator
    {
        /// <summary>
        /// Adds two numbers
        /// </summary>
        /// <param name="a">Number one</param>
        /// <param name="b">Number two</param>
        /// <returns></returns>
        int Add(int a, int b);

        /// <summary>
        /// Substract B from A
        /// </summary>
        /// <param name="a">Number one</param>
        /// <param name="b">Number two</param>
        /// <returns></returns>
        int Sub(int a, int b);

        string FindContactByEmail(string email);
    }

    /*
    public interface IMessage
    {
        //public void SendMessageToAll(string sender, string message);

    }
    */
}