import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  singletons: {
    hero: singleton({
      label: 'Hero',
      path: 'src/content/hero',
      schema: {
        badge: fields.text({ label: 'Badge', defaultValue: 'Bateau-école depuis 1979' }),
        title: fields.text({ label: 'Titre', defaultValue: 'Votre permis bateau à Toulouse' }),
        subtitle: fields.text({
          label: 'Sous-titre',
          multiline: true,
          defaultValue: "Formateurs diplômés d'État, 99 % de réussite au premier passage. Rejoignez l'école de référence en Occitanie.",
        }),
        image: fields.text({ label: 'URL image hero', defaultValue: 'https://larouetourne31.com/wp-content/uploads/2024/10/cover-permis-cotier-bateau-moteur.jpg' }),
        cta_text: fields.text({ label: 'Texte CTA', defaultValue: 'Découvrir nos formations' }),
        cta_phone: fields.text({ label: 'Téléphone', defaultValue: '05 61 73 86 07' }),
      },
    }),
    settings: singleton({
      label: 'Paramètres',
      path: 'src/content/settings',
      schema: {
        phone: fields.text({ label: 'Téléphone', defaultValue: '05 61 73 86 07' }),
        email: fields.text({ label: 'Email', defaultValue: 'contact@argonaute.eu' }),
        address: fields.text({ label: 'Adresse', defaultValue: '14 Rue Hermès, 31520 Ramonville-Saint-Agne' }),
        hours: fields.text({ label: 'Horaires', defaultValue: 'Mardi — Vendredi : 10h-19h | Samedi : 9h-13h' }),
      },
    }),
  },
  collections: {
    permits: collection({
      label: 'Permis',
      slugField: 'name',
      path: 'src/content/permits/*',
      schema: {
        name: fields.slug({ name: { label: 'Nom' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        price: fields.text({ label: 'Prix' }),
        badge: fields.text({ label: 'Badge (ex: Le + populaire)', description: 'Laisser vide si pas de badge' }),
        features: fields.array(fields.text({ label: 'Feature' }), {
          label: 'Caractéristiques',
          itemLabel: (props) => props.value,
        }),
        order: fields.integer({ label: 'Ordre', defaultValue: 0 }),
      },
    }),
    reviews: collection({
      label: 'Avis',
      slugField: 'name',
      path: 'src/content/reviews/*',
      schema: {
        name: fields.slug({ name: { label: 'Nom' } }),
        rating: fields.integer({ label: 'Note (1-5)', defaultValue: 5, validation: { min: 1, max: 5 } }),
        text: fields.text({ label: 'Avis', multiline: true }),
        date: fields.text({ label: 'Date relative', defaultValue: 'Il y a 2 semaines' }),
      },
    }),
    faq: collection({
      label: 'FAQ',
      slugField: 'question',
      path: 'src/content/faq/*',
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.text({ label: 'Réponse', multiline: true }),
        order: fields.integer({ label: 'Ordre', defaultValue: 0 }),
      },
    }),
  },
});
