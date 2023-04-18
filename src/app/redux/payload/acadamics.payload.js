// RESPONSE PAYLOAD4

export const reStructureAllClassPayload = (classArr) => {
  let temp = [];

  // Group BY CLASS
  let groupBy12 = [];
  let groupBy11 = [];

  let groupBy10 = [];
  let groupBy9 = [];
  let groupBy8 = [];

  let groupBy7 = [];
  let groupBy6 = [];
  let groupBy5 = [];
  let groupBy4 = [];
  let groupBy3 = [];
  let groupBy2 = [];
  let groupBy1 = [];

  let groupByUKG = [];
  let groupByLKG = [];
  let groupByPRE = [];

  if (classArr && classArr.length > 0) {
    classArr.map((item) => {
      switch (item.class) {
        case "12":
            groupBy12.push(item);
          break
        case "11":
            groupBy11.push(item);
          break
        case "10":
            groupBy10.push(item);
          break
        case "9":
            groupBy9.push(item);
          break
        case "8":
            groupBy8.push(item);
          break;
          case "7":
            groupBy7.push(item);
          break
          case "6":
            groupBy6.push(item);
          break
          case "5":
            groupBy5.push(item);
          break
          case "4":
            groupBy4.push(item);
          break
          case "3":
            groupBy3.push(item);
          break
          case "2":
            groupBy2.push(item);
          break
          case "1":
            groupBy1.push(item);
          break
          case "UKG":
            groupByUKG.push(item);
          break
          case "LKG":
            groupByLKG.push(item);
          break
          case "PREKG":
            groupByPRE.push(item);
          break
        default:
            return item;
      }
    });
  }
//   enum: ['SENIOR_SECONDARY', 'SECONDARY', 'MIDDLE', 'PRIMARY', 'PRE_PRIMARY'],

  let SENIOR_SECONDARYArr = [];
  let SECONDARYArr = [];
  let MIDDLEArr = [];
  let PRIMARYArr = [];
  let PRE_PRIMARYArr = [];

  //
  const sectionsArr = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  // Group By ClassType
  SENIOR_SECONDARYArr.push({standards: '12', sections: sectionsArr.slice(0, groupBy12.length) })
  SENIOR_SECONDARYArr.push({standards: '11', sections: sectionsArr.slice(0, groupBy11.length)})

  SECONDARYArr.push({standards: '10', sections: sectionsArr.slice(0, groupBy10.length) })
  SECONDARYArr.push({standards: '9', sections: sectionsArr.slice(0, groupBy9.length)})

  MIDDLEArr.push({standards: '8', sections: sectionsArr.slice(0, groupBy8.length)})
  MIDDLEArr.push({standards: '7', sections: sectionsArr.slice(0, groupBy7.length)})
  MIDDLEArr.push({standards: '6', sections: sectionsArr.slice(0, groupBy6.length)})

  PRIMARYArr.push({standards: '5', sections: sectionsArr.slice(0, groupBy5.length)})
  PRIMARYArr.push({standards: '4', sections: sectionsArr.slice(0, groupBy4.length)})
  PRIMARYArr.push({standards: '3', sections: sectionsArr.slice(0, groupBy3.length)})
  PRIMARYArr.push({standards: '2', sections: sectionsArr.slice(0, groupBy2.length)})
  PRIMARYArr.push({standards: '1', sections: sectionsArr.slice(0, groupBy1.length)})

  PRE_PRIMARYArr.push({standards: 'UKG', sections: sectionsArr.slice(0, groupByUKG.length)})
  PRE_PRIMARYArr.push({standards: 'LKG', sections: sectionsArr.slice(0, groupByLKG.length)})
  PRE_PRIMARYArr.push({standards: 'PRE-KG', sections: sectionsArr.slice(0, groupByPRE.length)})



  // temp
  temp.push({classType: 'Senior Secondary', class: SENIOR_SECONDARYArr})
  temp.push({classType: 'Secondary', class: SECONDARYArr})
  temp.push({classType: 'Middle', class: MIDDLEArr})
  temp.push({classType: 'Primary', class: PRIMARYArr})
  temp.push({classType: 'Pre-Primary', class: PRE_PRIMARYArr})

  //
//   console.log('newSectionHandler temp', temp)

  return temp;
};

export const reStructureAllStaffsPayload = (staffL) => {

  let staff = staffL;
  // if(staffL && staffL.length > 0) {
  //   staffL.map((item) => {
  //     staff.push({
  //       id: item._id,
  //       name: `${item.firstName}, ${item.lastName}`,
  //     })
  //   })
  // }
  return staff
};

export const reStructureAllStudentsPayload = (studL) => {
  

  let stud = [];

  if(studL && studL.length > 0) {
    studL.map((item) => {
      stud.push({
        id: item._id,
        name: `${item.firstName},${item.lastName}`,
      })
    })
  }

  return stud;
}

export const reStructureClassPayload = (data) => {

  let students = [];
  let subjects = [];

  if (data?.students && data?.students.length > 0) {
    data?.students.map(item => {
      students.push({
        id: item?.refId,
        name: item?.name,
      })
    })
  }

  if (data?.subjects && data?.subjects.length > 0) {
    data?.subjects.map(item => {
      subjects.push({
        id: item?.subjectStaff,
        subjectName: item?.subject,
        subStaff: item?.staffName ,
        key: item?._id,
        staffId: item?.staffRefId,
      })
    })
  }

  return {
    standard: data?.class,
    section: data?.section,
    hasClassTeacher: data?.hasClassTeacher,
    classTeacher: {
      name: data?.classTeacher?.name,
      id: data?.classTeacher?.id,
    },
    classId: data?._id,
    subjects,
    students,
  }

}

export const getReqPayloadForSingleClass = (data=[]) => {



  let students = [];
  let subjects = [];

  const sub = data?.tablePreData;

  if (sub && sub.length > 0) {
    sub.map((o) => {
      subjects.push({
        subject: o.subject,
        staffRefId: o.id,
        staffName: o.staffName,
        isStaffAssigned: o.id ? true : false,
      })
    })
  }

  const stud = data?.studentListArr;

  console.log('ata?.tableData;', data)
  if (stud && stud.length > 0) {
    stud.map((o) => {
      students.push({
        refId: o.id,
        name: o.name,
      })
    })
  }

      const classTeacher = {
        name: data?.assignedClassTeacher?.name,
        id: data?.assignedClassTeacher?.id,
        hasClassTeacher: data?.assignedClassTeacher?.id ? true : false,
      }

  return {
    subjects,
    students,
    classTeacher:  data?.assignedClassTeacher?.id ? classTeacher : null
  }
}
