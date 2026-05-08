const JAN = [
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Windows", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Celular", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Approvo", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 2.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 1.5, ana: "Leonardo" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "Celular", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Approvo", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Approvo", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 2.5, ana: "Leilton" },
  { cat: "Rede", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1.5, ana: "Leonardo" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 2, ana: "Leilton" },
];

const FEV = [
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Tablet", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Driver", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Outlook", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Rede", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Hamilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Tablet", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Click Compliance", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Click Compliance", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Click Compliance", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Tablet", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Click Compliance", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Tablet", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Tablet", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Outlook", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Outlook", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Nydus", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Click Compliance", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Tablet", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Monitor", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Outlook", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 0.5, ana: "Leilton" },
];

const MAR = [
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.3, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Infra", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "E-mail", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Office", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Office", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leonardo" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 2, ana: "Hamilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 2, ana: "Leonardo" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 2, ana: "Leonardo" },
  { cat: "Impressora", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "OneDrive", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.75, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Office", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1.5, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rede", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Office", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Segurança", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Nydus", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Click Compliance", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Click Compliance", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 5, ana: "Leonardo" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Nydus", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Windows", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 3, ana: "Leilton" },
  { cat: "Click Compliance", fin: "Sim", h: 0.25, ana: "Leilton" },
];

// ════════════════════════════════════════════════════
// DADOS COMPLETOS — ABRIL (113 registros)
// ════════════════════════════════════════════════════
const ABR = [
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Termos", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Suprisul", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Approvo", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Fora do escopo", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Termos", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Auxilio", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Periférico", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "MS365", fin: "Sim", h: 2, ana: "Leonardo" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 1.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rede", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Termos", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Infra", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Infra", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Tablet", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 6, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Windows", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Exchange", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Tablet", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Windows", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Windows", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Windows", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Segurança", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leonardo" },
  { cat: "Software", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Segurança", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Celular", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Suprisul", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Provisionamento de Usuário", fin: "Sim", h: 4, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 1, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 2, ana: "Leilton" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Rateio", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Gestão", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.15, ana: "Leilton" },
  { cat: "MS365", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Windows", fin: "Sim", h: 2.75, ana: "Leilton" },
  { cat: "Periférico", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Desligamento de Usuário", fin: "Sim", h: 2, ana: "Leonardo" },
  { cat: "Impressora", fin: "Sim", h: 2, ana: "Leonardo" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Leonardo" },
  { cat: "Impressora", fin: "Sim", h: 0.25, ana: "Leilton" },
  { cat: "Hardware", fin: "Sim", h: 0.5, ana: "Leonardo" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Checklist", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Mega", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Impressora", fin: "Sim", h: 0.5, ana: "Leilton" },
  { cat: "Infra", fin: "Sim", h: 6, ana: "Leilton" },
];

// ════════════════════════════════════════════════════
// FUNÇÕES AUXILIARES
// ════════════════════════════════════════════════════
const sumH = (a) => +a.reduce((s, r) => s + r.h, 0).toFixed(1);
const countFin = (a, v) => a.filter((r) => r.fin === v).length;

function catMap(arr) {
  const m = {};
  arr.forEach((r) => {
    m[r.cat] = (m[r.cat] || 0) + 1;
  });
  return m;
}
function anaMap(arr) {
  const m = {};
  arr.forEach((r) => {
    m[r.ana] = (m[r.ana] || 0) + 1;
  });
  return m;
}
function topN(obj, n) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}
function topKey(obj) {
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
}

// ════════════════════════════════════════════════════
// CÁLCULOS
// ════════════════════════════════════════════════════
const jT = JAN.length,
  fT = FEV.length,
  mT = MAR.length,
  aT = ABR.length;
const total = jT + fT + mT + aT;

const jFin = countFin(JAN, "Sim"),
  fFin = countFin(FEV, "Sim"),
  mFin = countFin(MAR, "Sim"),
  aFin = countFin(ABR, "Sim");
const jNF = countFin(JAN, "Não"),
  fNF = countFin(FEV, "Não"),
  mNF = countFin(MAR, "Não"),
  aNF = countFin(ABR, "Não");
const totalFin = jFin + fFin + mFin + aFin;
const taxa = Math.round((totalFin / total) * 100);

const jH = sumH(JAN),
  fH = sumH(FEV),
  mH = sumH(MAR),
  aH = sumH(ABR);
const totalH = +(jH + fH + mH + aH).toFixed(1);

const jCM = catMap(JAN),
  fCM = catMap(FEV),
  mCM = catMap(MAR),
  aCM = catMap(ABR);
const allCM = catMap([...JAN, ...FEV, ...MAR, ...ABR]);

const jAM = anaMap(JAN),
  fAM = anaMap(FEV),
  mAM = anaMap(MAR),
  aAM = anaMap(ABR);
const allAM = anaMap([...JAN, ...FEV, ...MAR, ...ABR]);

const top10 = topN(allCM, 10);
const top6keys = topN(allCM, 6).map((e) => e[0]);

const meses = [
  { n: "Janeiro", v: jT },
  { n: "Fevereiro", v: fT },
  { n: "Março", v: mT },
  { n: "Abril", v: aT },
];
const topMes = [...meses].sort((a, b) => b.v - a.v)[0];

// ════════════════════════════════════════════════════
// PREENCHER KPIs
// ════════════════════════════════════════════════════
document.getElementById("kTotal").textContent = total;
document.getElementById("kTaxa").textContent = taxa + "%";
document.getElementById("kHoras").textContent = totalH + "h";
document.getElementById("kMes").textContent = topMes.n;
document.getElementById("kMesSub").textContent = topMes.v + " chamados";
document.getElementById("kCat").textContent = top10[0][0];
document.getElementById("kCatSub").textContent = top10[0][1] + " ocorrências";

// ════════════════════════════════════════════════════
// PREENCHER CARDS MENSAIS
// ════════════════════════════════════════════════════
[
  ["j1", jT],
  ["j2", jFin],
  ["j3", jNF],
  ["j4", jH + "h"],
  ["j5", topKey(jAM)],
  ["j6", topKey(jCM)],
  ["j7", "20 dias"],
  ["f1", fT],
  ["f2", fFin],
  ["f3", fNF],
  ["f4", fH + "h"],
  ["f5", topKey(fAM)],
  ["f6", topKey(fCM)],
  ["f7", "19 dias"],
  ["m1", mT],
  ["m2", mFin],
  ["m3", mNF],
  ["m4", mH + "h"],
  ["m5", topKey(mAM)],
  ["m6", topKey(mCM)],
  ["m7", "21 dias"],
  ["a1", aT],
  ["a2", aFin],
  ["a3", aNF],
  ["a4", aH + "h"],
  ["a5", topKey(aAM)],
  ["a6", topKey(aCM)],
  ["a7", "20 dias"],
].forEach(([id, val]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
});

// ════════════════════════════════════════════════════
// CHART.JS — CONFIGURAÇÕES GLOBAIS
// ════════════════════════════════════════════════════
Chart.defaults.color = "#7880a0";
Chart.defaults.font.family = "'Segoe UI', system-ui, sans-serif";
Chart.defaults.font.size = 12;

const grid = "rgba(0,0,0,0.05)";
const janC = "#4f8ef7";
const fevC = "#8b5cf6";
const marC = "#10d9a0";
const abrC = "#d35400";

// ─── VOLUME POR MÊS ──────────────────────────────
new Chart(document.getElementById("cVolume"), {
  type: "bar",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
    datasets: [
      {
        label: "Chamados",
        data: [jT, fT, mT, aT],
        backgroundColor: [janC, fevC, marC, abrC],
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── HORAS POR MÊS ───────────────────────────────
new Chart(document.getElementById("cHoras"), {
  type: "bar",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
    datasets: [
      {
        label: "Horas",
        data: [jH, fH, mH, aH],
        backgroundColor: [
          "rgba(245,200,66,.85)",
          "rgba(245,200,66,.65)",
          "rgba(245,200,66,.45)",
          "rgba(211,84,0,.75)",
        ],
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── TOP 10 CATEGORIAS ───────────────────────────
new Chart(document.getElementById("cCats"), {
  type: "bar",
  data: {
    labels: top10.map((e) => e[0]),
    datasets: [
      {
        label: "Chamados",
        data: top10.map((e) => e[1]),
        backgroundColor: [
          "#4f8ef7",
          "#8b5cf6",
          "#10d9a0",
          "#f5c842",
          "#f4714a",
          "#38bdf8",
          "#a78bfa",
          "#34d399",
          "#fbbf24",
          "#fb7185",
        ],
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid }, beginAtZero: true },
      y: { grid: { color: grid }, ticks: { font: { size: 11 } } },
    },
  },
});

// ─── ANALISTAS — BARRAS CUSTOMIZADAS ─────────────
const anaDiv = document.getElementById("anaDiv");
const anaMax = Math.max(...Object.values(allAM));
const anaColors = ["#4f8ef7", "#8b5cf6", "#10d9a0", "#d35400", "#f5c842"];
let anaIdx = 0;

Object.entries(allAM)
  .sort((a, b) => b[1] - a[1])
  .forEach(([nome, qtd]) => {
    const pct = Math.round((qtd / anaMax) * 100);
    const cor = anaColors[anaIdx % anaColors.length];
    anaIdx++;
    anaDiv.innerHTML += `
    <div class="ana-row">
      <div class="ana-name">${nome}</div>
      <div class="ana-track">
        <div class="ana-fill" style="width:${pct}%;background:${cor}">${qtd}</div>
      </div>
      <div class="ana-count" style="color:${cor}">${qtd}</div>
    </div>`;
  });

// ─── STATUS POR MÊS ──────────────────────────────
new Chart(document.getElementById("cStatus"), {
  type: "bar",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
    datasets: [
      {
        label: "Finalizados",
        data: [jFin, fFin, mFin, aFin],
        backgroundColor: marC,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Não Finalizados",
        data: [jNF, fNF, mNF, aNF],
        backgroundColor: "#f4714a",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: "#7880a0", boxWidth: 12 } },
    },
    scales: {
      x: { stacked: true, grid: { color: grid } },
      y: { stacked: true, grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── PIZZA — TOP 6 CATEGORIAS ────────────────────
const top6data = top6keys.map((k) => allCM[k] || 0);
const pizzaColors = [
  "#4f8ef7",
  "#8b5cf6",
  "#10d9a0",
  "#f5c842",
  "#f4714a",
  "#38bdf8",
];

new Chart(document.getElementById("cPizza"), {
  type: "doughnut",
  data: {
    labels: top6keys,
    datasets: [
      {
        data: top6data,
        backgroundColor: pizzaColors,
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: { color: "#7880a0", boxWidth: 12, font: { size: 11 } },
      },
    },
    cutout: "60%",
  },
});

// ─── COMPARATIVO MENSAL TOP 6 ────────────────────
new Chart(document.getElementById("cCompare"), {
  type: "bar",
  data: {
    labels: top6keys,
    datasets: [
      {
        label: "Janeiro",
        data: top6keys.map((k) => jCM[k] || 0),
        backgroundColor: janC,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "Fevereiro",
        data: top6keys.map((k) => fCM[k] || 0),
        backgroundColor: fevC,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "Março",
        data: top6keys.map((k) => mCM[k] || 0),
        backgroundColor: marC,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "Abril",
        data: top6keys.map((k) => aCM[k] || 0),
        backgroundColor: abrC,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: "#7880a0", boxWidth: 12 } },
    },
    scales: {
      x: { grid: { color: grid }, ticks: { font: { size: 11 } } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── TABELA: RANKING DE CATEGORIAS ───────────────
(function buildTable() {
  const allCats = [
    ...new Set([
      ...Object.keys(jCM),
      ...Object.keys(fCM),
      ...Object.keys(mCM),
      ...Object.keys(aCM),
    ]),
  ];

  const rows = allCats
    .map((cat) => ({
      cat,
      jan: jCM[cat] || 0,
      feb: fCM[cat] || 0,
      mar: mCM[cat] || 0,
      abr: aCM[cat] || 0,
      tot:
        (jCM[cat] || 0) + (fCM[cat] || 0) + (mCM[cat] || 0) + (aCM[cat] || 0),
    }))
    .sort((a, b) => b.tot - a.tot)
    .slice(0, 15);

  const maxTot = rows[0].tot;
  const tbl = document.getElementById("catTbl");

  tbl.innerHTML = `
    <thead>
      <tr>
        <th>#</th>
        <th>Categoria</th>
        <th>Janeiro</th>
        <th>Fevereiro</th>
        <th>Março</th>
        <th>Abril</th>
        <th>Total</th>
        <th>Distribuição</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (r, i) => `
        <tr>
          <td style="color:var(--muted);font-weight:800">${i + 1}</td>
          <td style="font-weight:600">${r.cat}</td>
          <td>${r.jan > 0 ? `<span class="pill jan">${r.jan}</span>` : "—"}</td>
          <td>${r.feb > 0 ? `<span class="pill feb">${r.feb}</span>` : "—"}</td>
          <td>${r.mar > 0 ? `<span class="pill mar">${r.mar}</span>` : "—"}</td>
          <td>${r.abr > 0 ? `<span class="pill abr">${r.abr}</span>` : "—"}</td>
          <td style="font-weight:800;color:var(--text)">${r.tot}</td>
          <td>
            <div style="background:var(--card2);border-radius:4px;height:6px;width:120px;overflow:hidden;display:inline-block;vertical-align:middle">
              <div style="height:100%;width:${Math.round((r.tot / maxTot) * 100)}%;background:var(--accent);border-radius:4px"></div>
            </div>
          </td>
        </tr>`,
        )
        .join("")}
    </tbody>`;
})();
