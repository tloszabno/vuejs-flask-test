new Vue({
    el: '#prioritiesDiv',
    data: {
        priorities: [],
        loaded: false
    },
    ready: function() {
        this.fetch();
    },
    methods: {
        fetch: function() {
            this.$http.get('priorities').success(function(priorities) {
                this.$set('priorities', priorities.priorities);
                this.$set('loaded', true);
            });
        }
    }
});
