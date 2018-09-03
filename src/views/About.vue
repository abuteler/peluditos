<template>
  <div class="about">
    <md-content class="md-layout about-container">
      <div class="md-layout-item md-size-20"></div>
      <div class="md-layout-item md-size-60">
        <md-card class="md-layout">
          <md-card-media class="md-layout-item md-size-30">
            <img src="../assets/peluditos-media.png" alt="media" class="media">
          </md-card-media>
          <md-card-content class="md-layout-item md-size-70">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Nuestra Propuesta</div>
              </md-card-header-text>
            </md-card-header>
            <md-list>
              <md-list-item class="list-item">
                Peluditos es un proyecto sin fines de lucro que consiste en la creación de una app para celulares que ayuda a centralizar esfuerzos y simplificar el proceso de reunir a los animales con sus dueños.
              </md-list-item>
              <md-list-item class="list-item">
                App de mascotas perdidas / encontradas / en adopción / en tránsito.
              </md-list-item>
              <md-list-item class="list-item">
                Intuitiva, fácil de usar, nombre sencillo, diseño atractivo.
              </md-list-item>
            </md-list>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-20"></div>
    </md-content>
  </div>
</template>

<style lang="scss" scoped>
  .about-container {
    padding: 30px;
  }
  .media {
    width: 200px;
  }
  .list-item div {
    white-space: normal;
  }
</style>
