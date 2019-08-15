class FollowToggle{
   constructor(el){
      this.$el = $(el);
      this.userId = this.$el.data('user-id');
      this.followState = this.$el.data('initial-follow-state');
      this.render();
      this.$el.on("click", this.handleClick.bind(this));
   }
   render(){
      if (this.followState === "unfollowed") { this.$el.html("Follow!")};
      if (this.followState === "followed") {this.$el.html("Unfollow!!!")};
   };

  
   handleClick(event){
      const that = this;
      event.preventDefault();
      if (this.followState === "unfollowed"){
        this.followState = "followed";
        this.render();
         $.ajax({
            url: `/users/${this.userId}/follow`,
            method: "POST",
            type: 'json',
            success: function(user) {
               console.log('User Followed!');
               console.log(user);
             },
             error: function(errMsg) {
               console.log(errMsg);
             }
         });
      } else if(this.followState === "followed"){
         this.followState = "unfollowed";
         this.render();
         $.ajax({
            url: `/users/${this.userId}/follow` ,
            method: "DELETE",
            type: 'json',
            success: function(user) {
               console.log('Widget DELETED!');
               console.log(user);
             },
             error: function(errMsg) {
               console.log(errMsg);
             }

         });
         
      };

   }
}


module.exports = FollowToggle;

