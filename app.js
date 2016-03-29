var Tutorial = new Vue({
    'el': '#tutorial',
    'data': {
        'steps': '',
        'curStep': 0
    },
    'computed': {
        'title': function () {
            return document.querySelector('#step-' + this.curStep + ' h1').textContent;
        },
        'intro': function () {
            return document.querySelector('#step-' + this.curStep + ' p:first-of-type').textContent;
        },
        'interaction': function () {
            return document.querySelector('#step-' + this.curStep + ' .interaction').innerHTML;
        }
    },
    'ready': function () {
        this.initSteps();
    },
    'methods': {
        'initSteps': function () {
            var steps = [
                {
                    'task': 'Begin tutorial',
                    'substeps': [
                        { 'instruction': 'Press the "Press me" button when you are ready to begin.' }
                    ],
                    'tips': [
                        {
                            'name': 'Tip 1 name!',
                            'content': 'This is a tip.'
                        },
                        {
                            'name': 'Tip 2 name!',
                            'content': 'A second tip.'
                        }
                    ]
                },
                {
                    'task': 'Woo hoo, Step 2',
                    'substeps': [
                        { 'instruction': 'Step 2 has two substeps. This is the first.' },
                        { 'instruction': 'A second substep in step 2.' }
                    ]
                }
            ];
            this.$set('steps', steps);
        },
        'accomplishStep': function (index) {
            this.steps[index].accomplished = true;
        },
        'next': function () {
            var n = this.curStep + 1;
            this.curStep = (n > this.steps.length - 1) ? this.steps.length - 1 : n;
        },
        'prev': function () {
            var n = this.curStep - 1;
            this.curStep = (n < 0) ? 0 : n;
        },
        'gotoStep': function (index) {
            this.curStep = index;
        }
    }
});
