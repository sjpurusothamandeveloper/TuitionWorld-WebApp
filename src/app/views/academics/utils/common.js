export const getClassTypeKey = (k) => {

    switch (k) {
        case 'Senior Secondary':
            return 'SENIOR_SECONDARY'
        case 'Secondary':
            return 'SECONDARY'
        case 'Middle':
            return 'MIDDLE'
        case 'Primary':
            return 'PRIMARY'
        case 'Pre-Primary':
            return 'PRE_PRIMARY'
        default:
            break;
    }
}