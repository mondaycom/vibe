import React from "react";
import renderer from "react-test-renderer";
import Accordion from "../Accordion";
import AccordionItem from "../../AccordionItem/AccordionItem";


describe("Snapshot tests", () => {
	describe("Accordion renders correctly", () => {
		it("with empty props", () => {
			const tree = renderer.create(<Accordion />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	
		it("with accordion items", () => {
			const tree = renderer
				.create(
					<Accordion>
						<AccordionItem />
						<AccordionItem />
						<AccordionItem />
					</Accordion>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});
	
		it("with defaultIndex prop", () => {
			const tree = renderer
				.create(
					<Accordion defaultIndex={[0]}>
						<AccordionItem />
						<AccordionItem />
						<AccordionItem />
					</Accordion>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});
	
		it("with className", () => {
			const tree = renderer.create(<Accordion className="test" />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	
		it("with id", () => {
			const tree = renderer.create(<Accordion id="test" />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	
		it("with allowMultiple", () => {
			const tree = renderer
				.create(
					<Accordion allowMultiple defaultIndex={[0, 2]}>
						<AccordionItem />
						<AccordionItem />
						<AccordionItem />
					</Accordion>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
	describe("AccordionItem renders correctly", () => {
		it("with className", () => {
			const tree = renderer
				.create(
					<Accordion defaultIndex={[0]}>
						<AccordionItem className="test" />
					</Accordion>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it("with id", () => {
			const tree = renderer
				.create(
					<Accordion defaultIndex={[0]}>
						<AccordionItem id="test" />
					</Accordion>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it("with title", () => {
			const tree = renderer
				.create(
					<Accordion defaultIndex={[0]}>
						<AccordionItem title="Test title" />
					</Accordion>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it("with children", () => {
			const tree = renderer
				.create(
					<Accordion defaultIndex={[0]}>
						<AccordionItem>Test Children</AccordionItem>
					</Accordion>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		it("with iconSize", () => {
			const tree = renderer
				.create(
					<Accordion defaultIndex={[0]}>
						<AccordionItem iconSize={36} />
					</Accordion>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
})
