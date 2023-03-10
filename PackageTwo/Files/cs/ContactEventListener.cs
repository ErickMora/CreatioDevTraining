
using Common.Logging;
using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace PackageTwo.Files.cs.EventListener
{
    /// <summary>
    /// Listener for 'EntityName' entity events.
    /// </summary>
    /// <seealso cref="Terrasoft.Core.Entities.Events.BaseEntityEventListener" />
    //[EntityEventListener(IsGlobal = true)]
    [EntityEventListener(SchemaName = "Contact")]
    internal class ContactEventListener : BaseEntityEventListener
    {
        #region Methods

        #region Methods : Public

        #region Methods : Public : OnSave
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity entity = (Entity)sender;
            UserConnection userConnection = entity.UserConnection;
            ILog logger = LogManager.GetLogger("GuidedLearningLogger");
            logger.InfoFormat("Executing OnSaving in PackageTwo {0}", DateTime.UtcNow);
            var email = entity.GetTypedColumnValue<string>("Email");
            entity.SetColumnValue("Phone", "444-444-4444");
        }
        public override void OnSaved(object sender, EntityAfterEventArgs e)
        {
            base.OnSaved(sender, e);
            Entity entity = (Entity)sender;
            UserConnection userConnection = entity.UserConnection;
        }
        #endregion

        #region Methods : Public : OnInsert
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Entity entity = (Entity)sender;
            UserConnection userConnection = entity.UserConnection;
        }
        public override void OnInserted(object sender, EntityAfterEventArgs e)
        {
            base.OnInserted(sender, e);
            Entity entity = (Entity)sender;
            UserConnection userConnection = entity.UserConnection;
        }
        #endregion

        #region Methods : Public : OnUpdate
        public override void OnUpdating(object sender, EntityBeforeEventArgs e)
        {
            base.OnUpdating(sender, e);
            Entity entity = (Entity)sender;
            UserConnection userConnection = entity.UserConnection;
        }
        public override void OnUpdated(object sender, EntityAfterEventArgs e)
        {
            base.OnUpdated(sender, e);
            Entity entity = (Entity)sender;
            UserConnection userConnection = entity.UserConnection;
        }
        #endregion

        #region Methods : Public : OnDelete
        public override void OnDeleting(object sender, EntityBeforeEventArgs e)
        {
            base.OnDeleting(sender, e);
            Entity entity = (Entity)sender;
            UserConnection userConnection = entity.UserConnection;
        }
        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            Entity entity = (Entity)sender;
            UserConnection userConnection = entity.UserConnection;
        }
        #endregion

        #endregion

        #endregion
    }
}
