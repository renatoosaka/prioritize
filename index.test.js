const { prioritizeNodes } = require('./index');

describe('Prioritize', function() {
  test.skip('First Example', function () {
    const tree = {
      "val": 1,
      "children": [
        {"val": 2},
        {
          "val": 3,
          "children": [
            {
              "val": 4,
              "children": [
                {"val": 5},
                {"val": 6},
                {"val": 7}
              ]
            }
          ]
        }
      ]
    };
    const response = prioritizeNodes(tree, 7);
    // console.log(JSON.stringify(response, null, 2))
    expect(response).toEqual({
      "val": 1,
      "children": [
        {
          "val": 3,
          "children": [
            {
              "val": 4,
              "children": [
                {"val": 7},
                {"val": 5},
                {"val": 6}
              ]
            }
          ]
        },
        {"val": 2}
      ]
    });
  })

  test.skip('Second Example', function () {
    const tree = {"val": 1};
    const response = prioritizeNodes(tree, 7);
    expect(response).toEqual({"val": 1});
  })

  test.skip('Third Example', function () {
    const tree = {
      val: 1,
      children: [
        {
          val: 1,
          children: [
            {val: 7}
          ]
        },
        {
          val: 3,
          children: [
            {val: 55}
          ]
        },
        {
          val: 2,
          children: [
            {val: 15}
          ]
        },
        {
          val: 7,
          children: [
            {val: 2}
          ]
        }
      ]
    };
    const response = prioritizeNodes(tree, 2);
    // console.log(JSON.stringify(response, null, 2))
    expect(response).toEqual({
      val: 1,
      children: [
        {
          val: 2,
          children: [
            {val: 15}
          ]
        },
        {
          val: 7,
          children: [
            {val: 2}
          ]
        },
        {
          val: 1,
          children: [
            {val: 7}
          ]
        },
        {
          val: 3,
          children: [
            {val: 55}
          ]
        }
      ]
    });
  })

  test('Fourth Example', function () {
    const tree = {
      val: 1,
      children: [
        {
          val: 2,
          children: [
            {
              val: 7,
              children: [
                {val: 2},
                {val: 18},
                {val: 12}
              ]
            }
          ]
        },
        {
          val: 4,
          children: [
            {val: 5},
            {
              val: 6,
              children: [
                {val: 12},
                {val: 11},
                {val: 10},
                {val: 9},
              ]
            },
            {val: 13}
          ]
        },
        {
          val: 3,
          children: [
            {val: 15}
          ]
        },
        {
          val: 17,
          children: [
            {val: 16},
            {
              val: 2,
              children: [
                {val: 14},
                {val: 11},
                {
                  val: 18,
                  children: [
                    {val: 4},
                    {val: 11},
                    {val: 7}
                  ]
                },
                {val: 27},
                {val: 18},
                {val: 29},
              ]
            }
          ]
        }
      ]
    };
    const response = prioritizeNodes(tree, 18);
    console.log(JSON.stringify(response, null, 2))
    expect(response).toEqual({
      val: 1,
      children: [
        {
          val: 2,
          children: [
            {
              val: 7,
              children: [
                {val: 18}, // <-- this moved up
                {val: 2},
                {val: 12}
              ]
            }
          ]
        },
        {
          val: 17, // <-- this moved up
          children: [
            {
              val: 2, // <-- this moved up
              children: [
                {
                  val: 18, // <-- this moved up
                  children: [
                    {val: 4},
                    {val: 11},
                    {val: 7}
                  ]
                },
                {val: 18}, // <-- this moved up
                {val: 14},
                {val: 11},
                {val: 27},
                {val: 29},
              ]
            },
            {val: 16}
          ]
        },
        {
          val: 4,
          children: [
            {val: 5},
            {
              val: 6,
              children: [
                {val: 12},
                {val: 11},
                {val: 10},
                {val: 9},
              ]
            },
            {val: 13}
          ]
        },
        {
          val: 3,
          children: [
            {val: 15}
          ]
        }
      ]
    });
  })

})