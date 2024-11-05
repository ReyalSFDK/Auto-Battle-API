export abstract class Character {
	public readonly identifier: string;
	public readonly baseHealth: number;
	public readonly baseAttack: number;

	protected constructor(
		character: {
			identifier: string,
			baseHealth: number,
			baseAttack: number,
		},
	) {
		this.identifier = character.identifier;
		this.baseHealth = character.baseHealth;
		this.baseAttack = character.baseAttack;
	}
}
