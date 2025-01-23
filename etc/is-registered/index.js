const { getContact } = require('./helpers/getContact')
const { getCustomFields } = require('./helpers/getCustomFields')

const availableCourse = {
  'einflussnehmerkursQ2-24': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (19.03.24)',
      },
      {
        customFieldKey: 'contact.en_kurs_gruppe_hauptleiter',
        requirement: 'NOT EMPTY',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiterkurs01_24-09-16': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (16.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (17.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (18.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (19.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (12.09.24)',
      },
      {
        customFieldKey: 'contact.en_kurs_gruppe_hauptleiter',
        requirement: 'NOT EMPTY',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiterkurs02_24-09-17': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (16.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (17.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (18.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (19.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (12.09.24)',
      },
      {
        customFieldKey: 'contact.en_kurs_gruppe_hauptleiter',
        requirement: 'NOT EMPTY',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiterkurs03_24-09-18': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (16.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (17.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (18.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (19.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (12.09.24)',
      },
      {
        customFieldKey: 'contact.en_kurs_gruppe_hauptleiter',
        requirement: 'NOT EMPTY',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiterkurs04_24-09-19': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (16.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (17.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (18.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (19.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (12.09.24)',
      },
      {
        customFieldKey: 'contact.en_kurs_gruppe_hauptleiter',
        requirement: 'NOT EMPTY',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiter-dna-kurs_24-09-12': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (16.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (17.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (18.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (19.09.24)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (12.09.24)',
      },
      {
        customFieldKey: 'contact.en_kurs_gruppe_hauptleiter',
        requirement: 'NOT EMPTY',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'einflussnehmer-summer-school_24-06-10': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Einflussnehmer Summer School (10.06.24)',
      },
      {
        customFieldKey: 'contact.en_kurs_gruppe_hauptleiter',
        requirement: 'NOT EMPTY',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiter-dna-kurs_25-01-21': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (20.01.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (17.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (25.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (26.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (13.03.25)',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiterkurs01_25-01-27': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (20.01.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (17.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (25.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (26.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (13.03.25)',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiterkurs02_25-02-04': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (20.01.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (17.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (25.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (26.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (13.03.25)',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiterkurs03_25-02-05': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (20.01.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (17.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (25.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (26.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (13.03.25)',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  'leiterkurs04_25-02-06': {
    checks: [
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiter-DNA-Kurs: Einflussnehmer (20.01.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 01: Leiter werden (17.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 02: Gruppenleiter (25.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 03: Bereichsleiter (26.03.25)',
      },
      {
        customFieldKey: 'contact.aktuelle_kurse',
        requirement: '==Leiterkurs 04: Gesamtleiter (13.03.25)',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
  generalCourseParticipantOrCommunityMember: {
    checks: [
      {
        field: 'type',
        requirement: '==kursteilnehmer',
      },
      {
        field: 'type',
        requirement: '==community_mitglied',
      },
    ],
    options: {
      logic: 'OR',
    },
  },
}

const isRegistered = async ({ contactEmail, course }) => {
  const contact = await getContact(contactEmail)
  const customFields = await getCustomFields()

  if (!contact) {
    return false
  }

  const evaluateCheck = (check) => {
    const contactFieldValue = contact[check.field]

    const customFieldId = check.customFieldKey
      ? customFields.find((field) => field.fieldKey === check.customFieldKey)
          ?.id
      : check.customFieldId

    const contactCustomFieldValue = contact.customField.find(
      (field) => field.id === customFieldId
    )?.value

    const value = contactFieldValue || contactCustomFieldValue

    if (check.requirement === 'EMPTY') {
      if (!value) return true
      return Array.isArray(value) ? !value.length : !value
    }

    if (check.requirement === 'NOT EMPTY') {
      if (!value) return false
      return Array.isArray(value) ? !!value.length : !!value
    }

    if (check.requirement.startsWith('!=')) {
      if (!value) return true
      const targetString = check.requirement.substring(2)
      if (Array.isArray(value)) {
        return !value.includes(targetString)
      } else {
        return String(value) !== targetString
      }
    }

    if (check.requirement.startsWith('==')) {
      if (!value) return false
      const targetString = check.requirement.substring(2)
      if (Array.isArray(value)) {
        return value.includes(targetString)
      } else {
        return String(value) === targetString
      }
    }
  }

  const selectedCourse = availableCourse[course]
  if (!selectedCourse) {
    console.log('course not found', {
      contactEmail,
      course,
    })
    return false
  }
  const checkResults = selectedCourse.checks.map(evaluateCheck)
  console.log('checkResults calculated', {
    params: { contactEmail, course },
    checkResults,
  })

  return selectedCourse?.options?.logic === 'OR'
    ? checkResults.some(Boolean)
    : checkResults.every(Boolean)
}

module.exports = { isRegistered }
