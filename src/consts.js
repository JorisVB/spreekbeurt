const scheduleTypes = 
{
    ADD: { key: "add", display: "Uitvoeren", bsStyle: "success" }, 
    CANCEL: { key: "cancel", display: "Niet uitvoeren", bsStyle: "danger" }, 
    CHANGE: {key:"change", display: "Aanpassen", bsStyle: "warning"}  
}

const occurrenceTypes = 
{ 
    DAILY: { key: "daily", display: "Dag(en)" }, 
    WEEKLY: { key: "weekly", display: "Week(en)" },
    MONTHLY: { key: "monthly", display: "Maand(en)" },
    MONTHLY_WORKDAYS: { key: "monthly_workdays", display: "Maand(en) (werkdagen)" }, 
}

const weekDays = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
const weekDaysShort = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"]

export { scheduleTypes, occurrenceTypes, weekDays, weekDaysShort }
