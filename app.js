var Tutorial = new Vue({
    'el': '#tutorial',
    'data': {
        'steps': '',
        'curStep': 0
    },
    'ready': function () {
        this.initSteps();
    },
    'methods': {
        'initSteps': function () {
            var steps = [
                { // step 1
                    'title': 'First step!',
                    'substeps': [
                        {
                            'instruction': 'First substep instruction.'
                        }
                    ],
                    'tips': [
                        {
                            'name': 'Tip 1 name!',
                            'content': 'This is a tip.'
                        }
                    ]
                },
                {
                    'title': 'Woo hoo, Step 2',
                    'substeps': [
                        {
                            'instruction': 'Step 2 has two substeps. This is the first.'
                        },
                        {
                            'instruction': 'A second substep in step 2.'
                        }
                    ]
                }
            ];
            this.$set('steps', steps);
        },
        'next': function () {
            this.curStep++;
        },
        'prev': function () {
            this.curStep--;
        },
        'gotoStep': function (index) {
            this.curStep = index;
        }
    }
});
