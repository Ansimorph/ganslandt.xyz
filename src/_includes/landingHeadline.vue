<template>
    <h1>
        {{ interestSentence }}
    </h1>
</template>

<script>
const interestSentence = require("../../../../src/_data/interestSentence.js");
export default {
    data: () => {
        return { interestSentence };
    },
};
</script>
