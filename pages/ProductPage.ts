import type { Locator, Page } from '@playwright/test';
import type { ReviewData } from '../test-data/reviews';

/**
 * Page Object: Página de detalle de producto y reseñas.
 */
export class ProductPage {
  readonly productName: Locator;
  readonly reviewsTab: Locator;
  readonly reviewNameInput: Locator;
  readonly reviewTextInput: Locator;
  readonly submitReviewButton: Locator;
  readonly reviewAlert: Locator;

  constructor(readonly page: Page) {
    this.productName = page.locator('#content h1');
    this.reviewsTab = page.getByRole('link', { name: /^Reviews \(\d+\)$/ });
    this.reviewNameInput = page.getByLabel('Your Name');
    this.reviewTextInput = page.getByLabel('Your Review');
    this.submitReviewButton = page.locator('#button-review');
    this.reviewAlert = page.locator('#form-review .alert');
  }

  async goto(productId: number): Promise<void> {
    await this.page.goto(`/index.php?route=product/product&product_id=${productId}`);
  }

  ratingOption(rating: number): Locator {
    return this.page.locator(`#form-review input[name="rating"][value="${rating}"]`);
  }

  async openReviews(): Promise<void> {
    await this.reviewsTab.click();
  }

  async writeReview(review: ReviewData): Promise<void> {
    await this.openReviews();
    await this.reviewNameInput.fill(review.name);
    await this.reviewTextInput.fill(review.text);
    if (review.rating) {
      await this.ratingOption(review.rating).check();
    }
    await this.submitReviewButton.click();
  }
}
