<template>
    <div>
        <md-list md-expand-single class="md-triple-line">
            <md-list-item v-for="item in pets" :key="item.id">
                <PetListItem
                        :animal-type="item.animalType"
                        :description="item.description"
                        :status="item.status"
                        :picture="item.pictures[0]"
                        :markers="item.markers" />
            </md-list-item>

            <md-divider class="md-inset"></md-divider>

            <md-list-item>
                <md-avatar>
                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                </md-avatar>

                <div class="md-list-item-text">
                    <span>me, Scott, Jennifer</span>
                    <span>Summer BBQ</span>
                    <p>Wish I could come, but I'm out of town this week. :(</p>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon>star_border</md-icon>
                </md-button>
            </md-list-item>

        </md-list>
    </div>
</template>

<script>
    import PetListItem from '../components/PetListItem';
    import restful from '../services/restful';

    // API:
    // http://192.168.28.68:8080/entities/animals
    const response = restful.getAllAnimalsList();
    console.log(response);

    const mockPet = {
        "id": 1,
        "animalType": "Perro",
        "description": "Mi perro perdido",
        "markers": [
            {
                "id": 0,
                "latitude": "234324",
                "longitude": "234234"
            }
        ],
        "name": "string",
        "pictures": [
            {
                "id": 0,
                "description": "mi perro perdido",
                "url": "../assets/tmp/perro_asd.jpg"
            }
        ],
        "status": "Adopted",
        "tags": [
            {
                "entities": [
                    null
                ],
                "id": 0,
                "tag": "string"
            }
        ],
    };

    export default {
        name: 'PetsListing',
        components: { PetListItem },
        data() {
            return {
                userData: {
                    username: 'John Doe',
                    userlevel: 1,
                    totalWins: 7,
                    totalLosses: 3,
                    WLR: 0.7,
                    averageScoreRounded: 18,
                },
                pets: [
                    mockPet
                ],
            };
        },
    }
</script>

<style lang="scss" scoped>
    .md-list {
        width: 320px;
        max-width: 100%;
        display: inline-block;
        vertical-align: top;
        border: 1px solid rgba(#000, .12);
    }
</style>