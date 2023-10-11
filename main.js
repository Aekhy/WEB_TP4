const { createApp } = Vue

// variable = conditon ? valeurSiCondition : valeurSinon
// variable = A || B      vaut A si A est vrai, B sinon : fonctionne pour les str int etc

// array.forEach()
// array.push()
// array.filter()

createApp({
  data() {
    return {
      // variable : valeur
    }
  },
  methods: {
    // f_name : function (){},
    // f_name(){}
    coucou(){
        console.log("Coucou")
    }
  },
  watch: {
    // variable(nouvellevaleur){ action }
  },
  computed: {
    // variableX(){return valeurdevariableX calculé a partir de this.variable}
  },
  mounted() {
    // quand l'html est fait
    this.coucou()
  }
}).mount('#app')