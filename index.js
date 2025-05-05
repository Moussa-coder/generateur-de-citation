const Citations = [
  "La vie est un mystère qu’il faut vivre, et non un problème à résoudre.",
  "Fais de ta vie un rêve, et d’un rêve, une réalité.",
  "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.",
  "N’attends pas. Le temps ne sera jamais juste.",
  "La meilleure façon de prédire l’avenir est de le créer.",
  "Ne rêve pas ta vie, vis tes rêves.",
  "Il n’y a pas d’ascenseur vers le succès, tu dois prendre les escaliers.",
  "On ne peut pas tout contrôler, mais on peut toujours choisir sa réaction.",
  "Tout le monde veut changer le monde, mais personne ne veut se changer soi-même.",
  "La vie n'est pas juste, mais elle continue.",
  "Tu ne peux pas plaire à tout le monde, même en faisant de ton mieux.",
  "Ce n’est pas parce que c’est difficile qu’on n’essaie pas, c’est parce qu’on n’essaie pas que c’est difficile.",
  "Les rêves ne fonctionnent que si toi aussi tu travailles.",
  "Tu n'auras pas toujours de la motivation, alors sois discipliné.",
  "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.",
  "On récolte ce que l’on sème, même si parfois, ça prend du temps.",
  "Tu peux tout faire, mais pas tout en même temps.",
  "Il n’y a pas de raccourci vers un endroit qui en vaut la peine.",
  "Personne ne viendra te sauver. C’est à toi de te lever.",
  "La vérité blesse parfois, mais elle libère toujours.",
  "Même les bonnes personnes peuvent se fatiguer d’être toujours celles qui comprennent.",
  "Arrête d'attendre le bon moment. Il ne viendra jamais.",
  "On ne guérit pas dans l’environnement qui nous a rendu malade.",
  "La perfection n’existe pas, mais l’amélioration est toujours possible.",
  "Parfois, abandonner n’est pas un signe de faiblesse, mais d’intelligence.",
  "Le monde ne te doit rien. Il était là avant toi.",
  "La maturité, c’est quand tu arrêtes de blâmer les autres pour ta vie.",
];

const btn = document.getElementById("btn");
const citationEl = document.getElementById("citation");

btn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * Citations.length);
  citationEl.textContent = Citations[index];
});