import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  showPassword = false;
  showConfirm = false;

  passwordStrength: 'faible' | 'moyen' | 'fort' | 'excellent' = 'faible';

  isPasswordFocused = false;
  confirmFocused = false;
  confirmTouched = false;

  passwordRules = {
    length: false,
    upper: false,
    number: false,
    special: false
  };

  passwordScore = 0;
  passwordPercent = 0;

  confirmPercent = 0;
  confirmScore = 0;

  constructor(private fb: FormBuilder) {}

  get passwordMatch(): boolean {
    return this.form.get('password')?.value === this.form.get('confirmPassword')?.value;
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );

    // Lors de la saisie dans confirmer → affiche message + update
    this.form.get('confirmPassword')?.valueChanges.subscribe(val => {
      this.confirmTouched = val !== '';
      this.checkConfirm();
    });

    // Quand le mot de passe change → reset confirmer
    this.form.get('password')?.valueChanges.subscribe(() => {
      this.resetConfirmState();
    });
  }

  onConfirmFocus() {
    this.confirmFocused = true;
    this.confirmTouched = true; // ✔ affichage immédiat du message
    this.checkConfirm();
  }

  resetConfirmState() {
    this.confirmScore = 0;
    this.confirmPercent = 0;

    // Efface CONFIRM sans déclencher la validation
    this.form.get('confirmPassword')?.setValue('', { emitEvent: false });

    this.confirmTouched = false;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirm() {
    this.showConfirm = !this.showConfirm;
  }

  // 🔥 Vérification force mot de passe
  checkStrength() {
    const pwd = this.form.get('password')?.value ?? '';

    this.passwordRules = {
      length: pwd.length >= 6,
      upper: /[A-Z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[^A-Za-z0-9]/.test(pwd)
    };

    this.passwordScore =
      (this.passwordRules.length ? 1 : 0) +
      (this.passwordRules.upper ? 1 : 0) +
      (this.passwordRules.number ? 1 : 0) +
      (this.passwordRules.special ? 1 : 0);

    this.passwordPercent = (this.passwordScore / 4) * 100;

    if (this.passwordScore <= 1) this.passwordStrength = 'faible';
    else if (this.passwordScore === 2) this.passwordStrength = 'moyen';
    else if (this.passwordScore === 3) this.passwordStrength = 'fort';
    else this.passwordStrength = 'excellent';
  }

  // 🔥 Vérification confirmation
  checkConfirm() {
    const pass = this.form.get('password')?.value ?? '';
    const confirm = this.form.get('confirmPassword')?.value ?? '';

    this.confirmScore = pass === confirm && confirm !== '' ? 1 : 0;
    this.confirmPercent = this.confirmScore * 100;
  }

  passwordMatchValidator(group: FormGroup) {
    const p = group.get('password')?.value;
    const c = group.get('confirmPassword')?.value;
    return p === c ? null : { mismatch: true };
  }

  onPasswordFocus() {
    this.isPasswordFocused = true;
  }

  onPasswordBlur() {
    this.isPasswordFocused = false;
  }

  submit() {
    if (this.form.invalid) return;
    console.log("Nouvel utilisateur :", this.form.value);
  }
}
