<template>
    <div class="pet-container">
        <md-avatar>
            <img :src="picture.url" :alt="picture.description" />
        </md-avatar>

        <div class="md-list-item-text">
            <span>{{ animalType }}</span>
            <span>Brunch this weekend?</span>
            <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
        </div>

        <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">star</md-icon>
        </md-button>
    </div>
</template>

<script>
    export default {
        name: 'PetListItem',
        props: ['animalType', 'description', 'status', 'picture', 'markers'],
    }
</script>

<style lang="scss" scoped>
    .pet-container {
        max-width: 100%;
        display: inline-block;
        vertical-align: top;
        border: 1px solid rgba(#000, .12);
    }
</style>