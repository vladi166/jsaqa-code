const sorting = require("../../app");

describe("Books names test suit", () => {
	test("Books names should be sorted in ascending order", () => {
		const input = [
			"Гарри Поттер",
			"Властелин Колец",
			"Волшебник изумрудного города",
		];

		const expected = [
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
		];

		const output = sorting.sortByName(input);

		expect(output).toEqual(expected);
	});

  test("should sort names in descending order (nameA > nameB)", () => {
    const input = [
      "Ведьмак",
      "Атлант расправил плечи",
    ];

    const expected = [
      "Атлант расправил плечи",
      "Ведьмак",
    ];
    const output = sorting.sortByName(input);

		expect(output).toEqual(expected);
  });

	test("Same names should keep order (return 0 branch)", () => {
		const input = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ];
		
    const expected = [
      "Гарри Поттер",
      "Гарри Поттер", 
      "Гарри Поттер",
    ];
		
    const output = sorting.sortByName(input);
		
    expect(output).toEqual(expected);
	});

	test("Should return empty array if input is empty", () => {
		const input = [];
		const expected = [];
		const output = sorting.sortByName(input);
		expect(output).toEqual(expected);
	});

  test("should handle one-element array", () => {
    const input = ["Зайка Коська"];
    const expected = ["Зайка Коська"];
    expect(sorting.sortByName(input)).toEqual(expected);
  });
});
