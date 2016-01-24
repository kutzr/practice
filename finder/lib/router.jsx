FlowRouter.route('/', {
    name: 'Dashboard',
    action() {
        ReactLayout.render(App, {
            content: <Dashboard/>,
            nav: <Nav/>
        });
    }
});

FlowRouter.route('/newGrunt', {
    name: 'NewGrunt',
    action() {
        ReactLayout.render(App, {
            content: <NewGrunt/>,
            nav: <Nav/>
        });
    }
});

FlowRouter.route('/grunts', {
    name: 'GruntList',
    action() {
        ReactLayout.render(App, {
            content: <GruntList/>,
            nav: <Nav/>
        });
    }
});
