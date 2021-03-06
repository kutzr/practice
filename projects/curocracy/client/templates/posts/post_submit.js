Template.postSubmit.onCreated(function() {
    Session.set('postSubmitErrors', {});
});

Template.postSubmit.helpers({
    errorMessage: function(field) {
        return Session.get('postSubmitErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
    }
});
Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();
        // We need to ensure we preventDefault on the event argument to our handler to
        // make sure the browser doesn't go ahead and try to submit the form.
        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        var errors = validatePost(post);
        if (errors.title || errors.url)
            return Session.set('postSubmitErrors', errors);

        Meteor.call('postInsert', post, function(error, result) {
            // display the error to the user and abort
            if (error)
                return throwError(error.reason);
            // show this result but route anyway
            if (result.postExists)
                throwError('This link has already been posted');
            Router.go('postPage', {
                _id: result._id
            });
        });
        // The insert() function on a collection returns the generated _id for the
        // object that has been inserted into the database, which the Router's go()
        // function will use to construct a URL for us to browse to.
    }
});
