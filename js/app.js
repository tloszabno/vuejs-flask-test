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
            this.$http.get('priorities').then((response) => {
                this.$set('priorities', response.data.priorities);
                this.$set('loaded', true);
            }, (response) => {
                // error callback
            });
        }
    }
});
