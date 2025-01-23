const { getContact } = require('./helpers/getContact')

const availableTargets = {
  'einflussnehmerkursQ2-24': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=552238&bundle_token=1009be4b4305f98b87a7187690fa2d79&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (19.03.24)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=552238',
      },
    ],
  },
  'leiterkurs01_24-09-16': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=610751&bundle_token=98e55edaf9e120b832e515a870065867&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiterkurs 01: Leiter werden (16.09.24)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=610751',
      },
    ],
  },
  'leiterkurs02_24-09-17': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=610752&bundle_token=6929ebf9a7458c37bfe20ad269b5785a&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiterkurs 02: Gruppenleiter (17.09.24)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=610752',
      },
    ],
  },
  'leiterkurs03_24-09-18': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=610753&bundle_token=611aa9f7db50dab19eda4289aba235e0&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiterkurs 03: Bereichsleiter (18.09.24)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=610753',
      },
    ],
  },
  'leiterkurs04_24-09-19': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=610754&bundle_token=a7a00011d63f1ccd7316b5d16a5dff7b&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiterkurs 04: Gesamtleiter (19.09.24)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=610754',
      },
    ],
  },
  'leiter-dna-kurs_24-09-12': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=610756&bundle_token=7e2879381c99b284b558f7de260b6f84&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (12.09.24)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=610756',
      },
    ],
  },
  'einflussnehmer-summer-school_24-06-10': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=610749&bundle_token=7eb5ee7fe2fac2bb35db13b7dab0fe5b&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Einflussnehmer Summer School (10.06.24)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=610749',
      },
    ],
  },
  'leiter-dna-kurs_25-01-21': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=1690201&bundle_token=d69a0ab2a1a86dd7b99bc7521353d8de&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (20.01.25)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=1690201',
      },
    ],
  },
  'leiterkurs01_25-01-27': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=1690207&bundle_token=cfef5884222354366a01696fe0f66727&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiterkurs 01: Leiter werden (17.03.25)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=1690207',
      },
    ],
  },
  'leiterkurs02_25-02-04': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=1690208&bundle_token=082607ef14e2113fdb575e1ccd5bb233&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiterkurs 02: Gruppenleiter (25.03.25)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=1690208',
      },
    ],
  },
  'leiterkurs03_25-02-05': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=1690209&bundle_token=c44d2d9c0d46c3886dafacc8be2c2b51&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiterkurs 03: Bereichsleiter (26.03.25)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=1690209',
      },
    ],
  },
  'leiterkurs04_25-02-06': {
    urlToRedirect:
      'https://onecommunity.mn.co/users/onboarding/choose_plan?plan_id=610754&bundle_token=a7a00011d63f1ccd7316b5d16a5dff7b&prefer_signup=true&utm_source=manual',
    urlToError: '/error-outdated-link',
    checks: [
      // He should have the course in "Aktuelle Kurse"
      {
        customFieldId: 'xVrX4NxePp7cxtaZ5xki',
        requirement: '==Leiterkurs 04: Gesamtleiter (13.03.25)',
      },
      // ZahlungsplanID shouldn't be the one he is trying to join
      {
        customFieldId: '0Y7672Zfx9tdNf7rO4ur',
        requirement: '!=610754',
      },
    ],
  },
}

const isValidRequest = async ({ contactEmail, target }) => {
  const contact = await getContact(contactEmail)

  if (!contact) {
    return false
  }

  return availableTargets[target].checks.every((check) => {
    const contactCustomField = contact.customField.find(
      (field) => field.id === check.customFieldId
    )

    if (check.requirement === 'EMPTY') {
      if (!contactCustomField?.value) return true
      return Array.isArray(contactCustomField.value)
        ? !contactCustomField.value.length
        : !contactCustomField.value
    }

    if (check.requirement.startsWith('!=')) {
      if (!contactCustomField?.value) return true
      const targetString = check.requirement.substring(2)
      if (Array.isArray(contactCustomField.value)) {
        return !contactCustomField.value.includes(targetString)
      } else {
        return String(contactCustomField.value) !== targetString
      }
    }

    if (check.requirement.startsWith('==')) {
      if (!contactCustomField?.value) return false
      const targetString = check.requirement.substring(2)
      if (Array.isArray(contactCustomField.value)) {
        return contactCustomField.value.includes(targetString)
      } else {
        return String(contactCustomField.value) === targetString
      }
    }
  })
}

const getRedirectUrl = async ({ contactEmail, target }) => {
  const { urlToRedirect, urlToError } = availableTargets[target]

  return (await isValidRequest({ contactEmail, target }))
    ? urlToRedirect
    : urlToError
}

module.exports = { getRedirectUrl }
