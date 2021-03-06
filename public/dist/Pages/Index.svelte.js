import './Index.svelte.css.proxy.js';
/* resources\js\Pages\Index.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import Button, { Label, Icon } from "../../_snowpack/pkg/@smui/button.js";

function create_default_slot_2(ctx) {
	let t;

	return {
		c() {
			t = text("thumb_up");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (15:8) <Label>
function create_default_slot_1(ctx) {
	let t;

	return {
		c() {
			t = text("Click me again");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (13:4) <Button on:click={() => clicked++}>
function create_default_slot(ctx) {
	let icon;
	let t;
	let label;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	label = new Label({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(label.$$.fragment);
		},
		m(target, anchor) {
			mount_component(icon, target, anchor);
			insert(target, t, anchor);
			mount_component(label, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const icon_changes = {};

			if (dirty & /*$$scope*/ 4) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty & /*$$scope*/ 4) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach(t);
			destroy_component(label, detaching);
		}
	};
}

// (22:8) {:else}
function create_else_block(ctx) {
	let span;

	return {
		c() {
			span = element("span");
			span.textContent = "You haven't clicked the button.";
			attr(span, "class", "grayed svelte-1zn2lf");
		},
		m(target, anchor) {
			insert(target, span, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (18:8) {#if clicked}
function create_if_block(ctx) {
	let t0;
	let t1;
	let t2;
	let t3_value = (/*clicked*/ ctx[0] === 1 ? "" : "s") + "";
	let t3;
	let t4;

	return {
		c() {
			t0 = text("You've clicked the button\n            ");
			t1 = text(/*clicked*/ ctx[0]);
			t2 = text("\n            time");
			t3 = text(t3_value);
			t4 = text(".");
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
			insert(target, t2, anchor);
			insert(target, t3, anchor);
			insert(target, t4, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*clicked*/ 1) set_data(t1, /*clicked*/ ctx[0]);
			if (dirty & /*clicked*/ 1 && t3_value !== (t3_value = (/*clicked*/ ctx[0] === 1 ? "" : "s") + "")) set_data(t3, t3_value);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
			if (detaching) detach(t2);
			if (detaching) detach(t3);
			if (detaching) detach(t4);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let button;
	let t;
	let p;
	let current;

	button = new Button({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	button.$on("click", /*click_handler*/ ctx[1]);

	function select_block_type(ctx, dirty) {
		if (/*clicked*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			div = element("div");
			create_component(button.$$.fragment);
			t = space();
			p = element("p");
			if_block.c();
			attr(p, "class", "mdc-typography--body1");
			attr(div, "class", "container");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(button, div, null);
			append(div, t);
			append(div, p);
			if_block.m(p, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 4) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(p, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(button);
			if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let clicked = 0;
	const click_handler = () => $$invalidate(0, clicked++, clicked);
	return [clicked, click_handler];
}

class Index extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Index;