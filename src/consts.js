const scheduleTypes = 
{
    ADD: { key: "add", display: "Uitvoeren", bsStyle: "success" }, 
    CANCEL: { key: "cancel", display: "Niet uitvoeren", bsStyle: "danger" }, 
    // TODO: CHANGE: {key:"change", display: "Aanpassen", bsStyle: "warning"}  
}

const occurrenceTypes = 
{ 
    DAILY: { key: "daily", display: "Dagelijks" }, 
    WEEKLY: { key: "weekly", display: "Wekelijks" },
    MONTHLY: { key: "monthly", display: "Maandelijks" },
    MONTHLY_WORKDAYS: { key: "monthly_workdays", display: "Maandelijks (werkdagen)" }, 
}

const weekDays = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
const weekDaysShort = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"]

export { scheduleTypes, occurrenceTypes, weekDays, weekDaysShort }
