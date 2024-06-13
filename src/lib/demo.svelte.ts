class CounterClass {
	count = $state(0);
	incrementor = $state(1);

	inc() {
		this.count += this.incrementor;
	}

	reset() {
		this.count = 0;
		this.incrementor = 1;
	}
}

export const counter = new CounterClass();
