const defaultCourses = [
  {
    name: 'York - Standard',
    state: 'OH',
    id: 'd1',
    holeData: [
      { holeNo: 1, par: 4, hdcp: 11 }, { holeNo: 2, par: 4, hdcp: 5 },
      { holeNo: 3, par: 3, hdcp: 15 }, { holeNo: 4, par: 4, hdcp: 7 },
      { holeNo: 5, par: 5, hdcp: 1 }, { holeNo: 6, par: 5, hdcp: 3 },
      { holeNo: 7, par: 3, hdcp: 17 }, { holeNo: 8, par: 4, hdcp: 9 },
      { holeNo: 9, par: 4, hdcp: 13 }, { holeNo: 10, par: 4, hdcp: 2 },
      { holeNo: 11, par: 3, hdcp: 12 }, { holeNo: 12, par: 5, hdcp: 6 },
      { holeNo: 13, par: 3, hdcp: 16 }, { holeNo: 14, par: 5, hdcp: 4 },
      { holeNo: 15, par: 4, hdcp: 10 }, { holeNo: 16, par: 3, hdcp: 18 },
      { holeNo: 17, par: 4, hdcp: 14 }, { holeNo: 18, par: 4, hdcp: 8 },
    ],
  },
  {
    name: 'York - Weekend',
    state: 'OH',
    id: 'd2',
    holeData: [
      { holeNo: 1, par: 4, hdcp: 10 }, { holeNo: 2, par: 4, hdcp: 4 },
      { holeNo: 3, par: 3, hdcp: 14 }, { holeNo: 4, par: 4, hdcp: 1 },
      { holeNo: 5, par: 5, hdcp: 7 }, { holeNo: 6, par: 5, hdcp: 11 },
      { holeNo: 7, par: 3, hdcp: 18 }, { holeNo: 8, par: 4, hdcp: 3 },
      { holeNo: 9, par: 4, hdcp: 8 }, { holeNo: 10, par: 4, hdcp: 2 },
      { holeNo: 11, par: 3, hdcp: 17 }, { holeNo: 12, par: 5, hdcp: 13 },
      { holeNo: 13, par: 3, hdcp: 15 }, { holeNo: 14, par: 5, hdcp: 9 },
      { holeNo: 15, par: 4, hdcp: 6 }, { holeNo: 16, par: 3, hdcp: 16 },
      { holeNo: 17, par: 4, hdcp: 12 }, { holeNo: 18, par: 4, hdcp: 5 },
    ],
  },
  // {
  //   name: 'Grand Cypress - New Course',
  //   state: 'FL',
  //   id: 'd3',
  //   holeData: [
  //     { holeNo: 1, par: 4, hdcp: 13 }, { holeNo: 2, par: 5, hdcp: 7 },
  //     { holeNo: 3, par: 3, hdcp: 15 }, { holeNo: 4, par: 4, hdcp: 3 },
  //     { holeNo: 5, par: 4, hdcp: 5 }, { holeNo: 6, par: 5, hdcp: 9 },
  //     { holeNo: 7, par: 3, hdcp: 17 }, { holeNo: 8, par: 4, hdcp: 1 },
  //     { holeNo: 9, par: 4, hdcp: 11 }, { holeNo: 10, par: 4, hdcp: 10 },
  //     { holeNo: 11, par: 4, hdcp: 6 }, { holeNo: 12, par: 3, hdcp: 8 },
  //     { holeNo: 13, par: 4, hdcp: 4 }, { holeNo: 14, par: 4, hdcp: 12 },
  //     { holeNo: 15, par: 5, hdcp: 2 }, { holeNo: 16, par: 3, hdcp: 18 },
  //     { holeNo: 17, par: 5, hdcp: 16 }, { holeNo: 18, par: 4, hdcp: 14 },
  //   ],
  // },
  // {
  //   name: 'Grand Cypress - North/South',
  //   state: 'FL',
  //   id: 'd4',
  //   holeData: [
  //     { holeNo: 1, par: 4, hdcp: 17 }, { holeNo: 2, par: 5, hdcp: 9 },
  //     { holeNo: 3, par: 4, hdcp: 11 }, { holeNo: 4, par: 3, hdcp: 15 },
  //     { holeNo: 5, par: 4, hdcp: 5 }, { holeNo: 6, par: 5, hdcp: 7 },
  //     { holeNo: 7, par: 4, hdcp: 1 }, { holeNo: 8, par: 3, hdcp: 13 },
  //     { holeNo: 9, par: 4, hdcp: 3 }, { holeNo: 10, par: 4, hdcp: 18 },
  //     { holeNo: 11, par: 5, hdcp: 8 }, { holeNo: 12, par: 3, hdcp: 12 },
  //     { holeNo: 13, par: 4, hdcp: 10 }, { holeNo: 14, par: 4, hdcp: 16 },
  //     { holeNo: 15, par: 5, hdcp: 2 }, { holeNo: 16, par: 4, hdcp: 6 },
  //     { holeNo: 17, par: 3, hdcp: 14 }, { holeNo: 18, par: 4, hdcp: 4 },
  //   ],
  // },
  // {
  //   name: 'OCN - Crooked Cat',
  //   state: 'FL',
  //   id: 'd5',
  //   holeData: [
  //     { holeNo: 1, par: 5, hdcp: 17 }, { holeNo: 2, par: 4, hdcp: 3 },
  //     { holeNo: 3, par: 4, hdcp: 13 }, { holeNo: 4, par: 5, hdcp: 11 },
  //     { holeNo: 5, par: 4, hdcp: 11 }, { holeNo: 6, par: 3, hdcp: 15 },
  //     { holeNo: 7, par: 4, hdcp: 7 }, { holeNo: 8, par: 3, hdcp: 5 },
  //     { holeNo: 9, par: 4, hdcp: 9 }, { holeNo: 10, par: 4, hdcp: 10 },
  //     { holeNo: 11, par: 4, hdcp: 12 }, { holeNo: 12, par: 4, hdcp: 2 },
  //     { holeNo: 13, par: 3, hdcp: 4 }, { holeNo: 14, par: 5, hdcp: 18 },
  //     { holeNo: 15, par: 3, hdcp: 14 }, { holeNo: 16, par: 4, hdcp: 6 },
  //     { holeNo: 17, par: 5, hdcp: 16 }, { holeNo: 18, par: 4, hdcp: 8 },
  //   ],
  // },
  // {
  //   name: 'Eagle Creek',
  //   state: 'FL',
  //   id: 'd6',
  //   holeData: [
  //     { holeNo: 1, par: 4, hdcp: 15 }, { holeNo: 2, par: 4, hdcp: 17 },
  //     { holeNo: 3, par: 4, hdcp: 13 }, { holeNo: 4, par: 5, hdcp: 3 },
  //     { holeNo: 5, par: 3, hdcp: 11 }, { holeNo: 6, par: 4, hdcp: 1 },
  //     { holeNo: 7, par: 4, hdcp: 5 }, { holeNo: 8, par: 3, hdcp: 9 },
  //     { holeNo: 9, par: 5, hdcp: 7 }, { holeNo: 10, par: 4, hdcp: 14 },
  //     { holeNo: 11, par: 3, hdcp: 12 }, { holeNo: 12, par: 4, hdcp: 4 },
  //     { holeNo: 13, par: 5, hdcp: 10 }, { holeNo: 14, par: 4, hdcp: 16 },
  //     { holeNo: 15, par: 4, hdcp: 2 }, { holeNo: 16, par: 5, hdcp: 6 },
  //     { holeNo: 17, par: 3, hdcp: 18 }, { holeNo: 18, par: 5, hdcp: 8 },
  //   ],
  // },
  // {
  //   name: 'Orange Lake - The Legends',
  //   state: 'FL',
  //   id: 'd7',
  //   holeData: [
  //     { holeNo: 1, par: 4, hdcp: 13 }, { holeNo: 2, par: 5, hdcp: 9 },
  //     { holeNo: 3, par: 3, hdcp: 15 }, { holeNo: 4, par: 5, hdcp: 1 },
  //     { holeNo: 5, par: 4, hdcp: 11 }, { holeNo: 6, par: 3, hdcp: 17 },
  //     { holeNo: 7, par: 4, hdcp: 7 }, { holeNo: 8, par: 5, hdcp: 3 },
  //     { holeNo: 9, par: 4, hdcp: 5 }, { holeNo: 10, par: 4, hdcp: 8 },
  //     { holeNo: 11, par: 5, hdcp: 6 }, { holeNo: 12, par: 3, hdcp: 12 },
  //     { holeNo: 13, par: 4, hdcp: 2 }, { holeNo: 14, par: 4, hdcp: 10 },
  //     { holeNo: 15, par: 3, hdcp: 16 }, { holeNo: 16, par: 4, hdcp: 14 },
  //     { holeNo: 17, par: 4, hdcp: 18 }, { holeNo: 18, par: 4, hdcp: 4 },
  //   ],
  // },
  // {
  //   name: "Falcon's Fire",
  //   state: 'FL',
  //   id: 'd8',
  //   holeData: [
  //     { holeNo: 1, par: 4, hdcp: 5 }, { holeNo: 2, par: 4, hdcp: 11 },
  //     { holeNo: 3, par: 3, hdcp: 13 }, { holeNo: 4, par: 5, hdcp: 17 },
  //     { holeNo: 5, par: 4, hdcp: 1 }, { holeNo: 6, par: 4, hdcp: 9 },
  //     { holeNo: 7, par: 5, hdcp: 3 }, { holeNo: 8, par: 3, hdcp: 7 },
  //     { holeNo: 9, par: 4, hdcp: 15 }, { holeNo: 10, par: 5, hdcp: 12 },
  //     { holeNo: 11, par: 3, hdcp: 18 }, { holeNo: 12, par: 4, hdcp: 4 },
  //     { holeNo: 13, par: 4, hdcp: 8 }, { holeNo: 14, par: 5, hdcp: 10 },
  //     { holeNo: 15, par: 3, hdcp: 16 }, { holeNo: 16, par: 4, hdcp: 14 },
  //     { holeNo: 17, par: 4, hdcp: 2 }, { holeNo: 18, par: 4, hdcp: 6 },
  //   ],
  // },
];

export default defaultCourses;
